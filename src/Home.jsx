import Button from "./Button"

function Home(){
    return(
        // <div>
        //     <div>Navbar section here</div>
        //     <div>Hero section here</div>
        //     <div>Content section here</div>
        //     <div>Footer section here</div>
        // </div>
        <>
        <Button name="Register" />
        <Button name="login"/>
        <Button name="Logout" />
        <Button />
        <Button name={1}/>
        </>
    )
}

export default Home