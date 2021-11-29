import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es.json"
import localeEnMessages from "./locales/en.json"
import JobsList from "./components/jobslist";
let ln = window.navigator.language.substring(0,2);

let localeMes;

if(ln === 'en')
{
    localeMes = localeEnMessages
}
else if(ln === 'es')
{
    localeMes = localeEsMessages
}


ReactDOM.render(
	<IntlProvider locale= {ln}  messages={localeMes} >
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);