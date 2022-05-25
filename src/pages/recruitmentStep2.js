import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import TerminalWindow from '../components/terminal/terminalWindow';
import LugLink from '../components/terminal/lugLink';
import { eventsDetails } from '../content/eventsDetails';
import '../components/typeWriter.css';
import {TypeAnimation} from '../components/typeWriter.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

export default function RecruitmentStepTwo(props) {

	const next = (e) => {
		e.preventDefault();
		if(!values.whatLinux || !values.whyLinux || !values.expLinux || !values.prefDept)
		{
			alert("Please fill out all Fields")
		}
		else {
		props.nextStep();
		}
	}

	const back = (e) => {
		e.preventDefault();
	 	props.previousStep();
	}

	const values = props.values
	const handleChange = props.handleChange

	return (
        <TerminalWindow>
            <section id = "terminal">
                <TerminalPrompt path = "~"> cd recruitment </TerminalPrompt>
	    </section>
		    <div>
                <TerminalPrompt path = "~/recruitment"> ./recruitment.exe -v 2022 </TerminalPrompt>
		    <br/>
		    <form>
		    <label> How would you describe Linux as short as possible? </label><br/>
		    <textarea style={{backgroundColor: '#808080', width: '30rem'}} rows="4" onChange={handleChange('whatLinux')} value={values.whatLinux} />
		    <br/>
		    <label> Why do you want to join the Linux Club? </label><br/>
		    <textarea style={{backgroundColor: '#808080', width: '30rem'}} rows="4" onChange={handleChange('whyLinux')} value={values.whyLinux}/>
		    <br/>
		    <label> Have you ever used any Linux distro? Whats your favourtie distro? </label><br/>
		    <textarea style={{backgroundColor: '#808080', width: '30rem'}} rows="4" onChange={handleChange('expLinux')} value={values.expLinux}/>
		    <br/>
		    <label for="dept"> Which department interests you the most in the Club? (You can change departments anytime later) </label><br/>
		    <select name="dept" id="dept" value={values.prefDept} onChange={handleChange('prefDept')}>
  		    <option value="tech">Technical Department</option>
		    <option value="management">Management Department</option>
		    <option value="operations">Operations/Social Media</option>
		    </select>

		    <br/>
		    <button type="submit" style={{backgroundColor: "#5cb85c", color: "white"}} onClick={back}>
		    <FontAwesomeIcon icon={faAngleDoubleLeft} />
		    </button>
                 
		    <button type="submit" style={{backgroundColor: "#5cb85c", color: "white"}} onClick={next}>
		    <FontAwesomeIcon icon={faAngleDoubleRight} />
		    </button>
		    </form>
            	    </div>
	  
        </TerminalWindow>
    );

}
