import TerminalWindow from '../../../components/terminal/terminalWindow';

export default function Success({formValues}) {
		
	return (
		<TerminalWindow
		title="Registration Successful"
		prompts={[
			{ path: '~/rescue-the-tux', command: 'cd ./register' },
			{ path: '~/rescue-the-tux/register', command: 'sudo start register.service' }
		]}
		>
		<div className='form-start'>Success!...</div>
		<div>
		     Dear {formValues.name}, Thank you for joining the team to rescue our Tux! See you soon on 19th August! :)
	        </div>
		</TerminalWindow>
	);
}
