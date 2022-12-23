const form = document.querySelector('#form');
const { fullName: full_name, email, message } = form.elements;

const setFormDataToLocalStorage = () => {
	const full_name_input = full_name.value;
	const email_input = email.value;
	const message_input = message.value;

	const data = { full_name_input, email_input, message_input };
	const data_stringify = JSON.stringify(data);
	localStorage.setItem('form_input_data', data_stringify);
};

full_name.addEventListener('change', () => setFormDataToLocalStorage());
email.addEventListener('change', () => setFormDataToLocalStorage());
message.addEventListener('change', () => setFormDataToLocalStorage());
