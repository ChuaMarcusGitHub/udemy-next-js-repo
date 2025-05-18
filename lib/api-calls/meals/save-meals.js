import fs from 'node:fs'; // fileSystem
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss'; // to sanitize the instructions

const db = sql('meals.db');

export const saveMeal = async (meal) => {
	const slug = slugify(meal.title, { lower: true });
	// sanitize the instructions
	const cleanedInstructions = xss(meal.instructions);

	// gets file extension from 'example_image.jpg'
	const formImage = meal.image;

	const ext = formImage.name.split('.').pop();
	const fileName = `${slug}.${ext}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await formImage.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			console.error('Error writing file:', error);
			throw new Error('Error writing file');
		}
	});

	// Writing the meal to the database
	const dao = {
		...meal,
		slug: slug,
		image: `/images/${fileName}`,
		instructions: cleanedInstructions,
	};

	db.prepare(
		`
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title, 
            @summary, 
            @instructions, 
            @creator, 
            @creator_email, 
            @image,
            @slug
        )`
	).run(dao);
};
