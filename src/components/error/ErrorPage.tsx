import { Link, useRouteError } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";


const ErrorPage = () => {

    const error: any = useRouteError()

    return (
        <section className="error">
            <div>
                <img src="https://25.media.tumblr.com/6f5b26a59c1651737e6df675b5a4c7a9/tumblr_mvf876gg0H1rev2tgo1_500.gif" alt="Not-Found" />
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><IoIosArrowRoundBack /></Link>
            </div>
        </section>
    );
}

export default ErrorPage