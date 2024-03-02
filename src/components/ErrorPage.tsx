import { useRouteError } from "react-router-dom";
import '../styles/ErrorPage.scss';
import {FC} from "react";

const ErrorPage: FC = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="ErrorPage">
            <div className="errorWrapper">
                <h1>Ой! Ошибка {error.status}.</h1>
                <p>Извините, при выполнении запроса произошла ошибка.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;