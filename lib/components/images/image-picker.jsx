'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import style from './image-picker.module.css';
export const ImagePicker = ({ label, name }) => {
	const [pickedImage, setPickedImage] = useState();
	const inputRef = useRef();
	const onClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleImageChange = (event) => {
		const [image] = event.target.files;

		if (!image) {
			setPickedImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(image);
	};
	return (
		<div className={style.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={style.controls}>
				<div className={style.preview}>
					{!pickedImage ? (
						<p>No image chosen</p>
					) : (
						<Image src={pickedImage} fill />
					)}
				</div>
				<input
					ref={inputRef}
					id={name}
					name={name}
					type={'file'}
					className={style.input}
					accept={'image/png, image/jpeg'}
					onChange={handleImageChange}
					required
				/>
				<button className={style.button} type={'button'} onClick={onClick}>
					Pick an Image
				</button>
			</div>
		</div>
	);
};
