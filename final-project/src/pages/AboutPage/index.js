import React from "react";

import UserInformation from "../../components/UserProfileComponent"
import "./style.css"

export default function AboutPage({ user }) {
	const axios = require('axios');


	return (
		<div>
			<div className='container'>
				<h1>Why is color palette selection important?</h1>
				<h2>People with different types of visual impairments might not be able to tell these colors apart. 
				Here, we have the same color palette shown through the eyes of people with different types of color vision deficiency. 
				Imagine how hard it would be to distinguish data displayed with those colors.</h2>
			</div>
			<div className='container'>
				<div className='containerPalette'>
					<div className='styleColor2' style={{backgroundColor: '#FFBBCC'}}>#FFBBCC</div>
					<div className='styleColor2' style={{backgroundColor: '#FFCCCC'}}>#FFCCCC</div>
					<div className='styleColor2' style={{backgroundColor: '#FFDDCC'}}>#FFDDCC</div>
					<div className='styleColor2' style={{backgroundColor: '#FFEECC'}}>#FFEECC</div>
				</div>
			</div>
			<div className='postsContainer'>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#E5E4C8'}}>#E5E4C8</div>
					<div className='styleColor' style={{backgroundColor: '#EBEACC'}}>#EBEACC</div>
					<div className='styleColor' style={{backgroundColor: '#F1F1D0'}}>#F1F1D0</div>
					<div className='styleColor' style={{backgroundColor: '#F8F8D5'}}>#F8F8D5</div>
					<h2>Protanopia</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#F5D5CA'}}>#F5D5CA</div>
					<div className='styleColor' style={{backgroundColor: '#F7DFCC'}}>#F7DFCC</div>
					<div className='styleColor' style={{backgroundColor: '#F9E9CE'}}>#F9E9CE</div>
					<div className='styleColor' style={{backgroundColor: '#FCF4D1'}}>#FCF4D1</div>
					<h2>Protanomaly</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#E9EEC7'}}>#E9EEC7</div>
					<div className='styleColor' style={{backgroundColor: '#EEF1CC'}}>#EEF1CC</div>
					<div className='styleColor' style={{backgroundColor: '#F3F6D1'}}>#F3F6D1</div>
					<div className='styleColor' style={{backgroundColor: '#F9FAD7'}}>#F9FAD7</div>
					<h2>Deuteranopia</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#F3D0CA'}}>#F3D0CA</div>
					<div className='styleColor' style={{backgroundColor: '#F6DBCC'}}>#F6DBCC</div>
					<div className='styleColor' style={{backgroundColor: '#F9E7CE'}}>#F9E7CE</div>
					<div className='styleColor' style={{backgroundColor: '#FCF3D1'}}>#FCF3D1</div>
					<h2>Deuteranomaly</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#FCC5C4'}}>#FCC5C4</div>
					<div className='styleColor' style={{backgroundColor: '#FDCCCC'}}>#FDCCCC</div>
					<div className='styleColor' style={{backgroundColor: '#FDD3D4'}}>#FDD3D4</div>
					<div className='styleColor' style={{backgroundColor: '#FEDCDD'}}>#FEDCDD</div>
					<h2>Tritanopia</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#FDC0C9'}}>#FDC0C9</div>
					<div className='styleColor' style={{backgroundColor: '#FECCCC'}}>#FECCCC</div>
					<div className='styleColor' style={{backgroundColor: '#FED8D0'}}>#FED8D0</div>
					<div className='styleColor' style={{backgroundColor: '#FFE6D3'}}>#FFE6D3</div>
					<h2>Tritanomaly</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#D4D4D4'}}>#D4D4D4</div>
					<div className='styleColor' style={{backgroundColor: '#DDDDDD'}}>#DDDDDD</div>
					<div className='styleColor' style={{backgroundColor: '#E6E6E6'}}>#E6E6E6</div>
					<div className='styleColor' style={{backgroundColor: '#F0F0F0'}}>#F0F0F0</div>
					<h2>Achromatopsia</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={{backgroundColor: '#E9C9D1'}}>#E9C9D1</div>
					<div className='styleColor' style={{backgroundColor: '#EDD5D5'}}>#EDD5D5</div>
					<div className='styleColor' style={{backgroundColor: '#F2E2DB'}}>#F2E2DB</div>
					<div className='styleColor' style={{backgroundColor: '#F7EFE0'}}>#F7EFE0</div>
					<h2>Achromanomaly</h2>
				</div>
			</div>

		</div>
	);
}
