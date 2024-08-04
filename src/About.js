import { Fragment } from "react"
import Disimg from './images/img2.jpg';

const abc = "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg";

function About() {
    return <h1>this is about page</h1>
}

export default About


export function Myabout1() {
    return <h2>this is heading two</h2>
}

export function Mypage() {
    return <Fragment>
        <h4>this is heading four</h4>
        <h5>heading five</h5>
    </Fragment>
}

export function Mypage1()
{
    return(
        <Fragment>
            <div><p>this is paragraph </p></div>
        </Fragment>
    )
}


export function Myimg()
{
    return(
        <Fragment>
        <h1>display image from public folder </h1>
        <img src="photo/img1.jpg" alt="for display"/>
        <h1>display image from src folder</h1>
        <img src={Disimg} alt="kjsdfk"/>
        <h1>display image from CDN</h1>
        <img src={abc} alt="sdfkhsdjf"/>


        </Fragment>
    )
}