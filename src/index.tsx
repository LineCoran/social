import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { App } from "./App";
import { ThemeProvider } from "./theme/ThemeProvider";


render( <ThemeProvider><App /></ThemeProvider>, document.getElementById('root'))