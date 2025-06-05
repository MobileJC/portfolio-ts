import { useState, type FormEvent, type ChangeEvent } from 'react';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: ContactForm = {
  name: '',
  email: '',
  message: '',
};


function Connect() {
	const [form, setForm] = useState<ContactForm>(initialFormState);
	const [errors, setErrors] = useState<Partial<ContactForm>>({});
	const [submitted, setSubmitted] = useState(false);

	const validate = (): boolean => {
		const newErrors: Partial<ContactForm> = {};

		if (!form.name.trim()) newErrors.name = 'Name is required';
		if (!form.email.trim()) newErrors.email = 'Email is required';
		else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
		if (!form.message.trim()) newErrors.message = 'Message is required';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		// Prevent browser default
		// To handle the submission manually on the client side in JS with React
		event.preventDefault();

		// note: useState/useRef can be used to extract form data

		if (validate()) {
		console.log('Form submitted:', form);
		setSubmitted(true);
		setForm(initialFormState); // Reset form
		}
	};
	
	// formEvent type is FromEvent<> (for onSubmit)

	return (
		<section className="container py-5">
			<h2 className="text-center mb-4">Looking forward to hearing from you!</h2>
			<form onSubmit={handleSubmit} noValidate className="mx-auto" style={{ maxWidth: '600px' }}>
				<div className="mb-3 text-start">
				<label htmlFor="name" className="form-label">Name</label>
				<input
					name="name"
					type="text"
					className={`form-control ${errors.name ? 'is-invalid' : ''}`}
					value={form.name}
					onChange={handleChange}
				/>
				{errors.name && <div className="invalid-feedback">{errors.name}</div>}
				</div>

				<div className="mb-3 text-start">
				<label htmlFor="email" className="form-label">Email</label>
				<input
					name="email"
					type="email"
					className={`form-control ${errors.email ? 'is-invalid' : ''}`}
					value={form.email}
					onChange={handleChange}
				/>
				{errors.email && <div className="invalid-feedback">{errors.email}</div>}
				</div>

				<div className="mb-3 text-start">
				<label htmlFor="message" className="form-label">Message</label>
				<textarea
					name="message"
					rows={4}
					className={`form-control ${errors.message ? 'is-invalid' : ''}`}
					value={form.message}
					onChange={handleChange}
				/>
				{errors.message && <div className="invalid-feedback">{errors.message}</div>}
				</div>

				<button type="submit" className="btn btn-primary w-100">Send Message</button>

				{submitted && <div className="alert alert-success mt-3 text-center">Thank you! Your message has been submitted.</div>}
			</form>
		</section>
	);
}

export default Connect;