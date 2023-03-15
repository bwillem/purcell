import {
    FC,
    FormEventHandler,
    LabelHTMLAttributes,
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    HTMLAttributes,
    useState,
} from "react";
import Container from "./Container";
import Supertitle from "./Supertitle";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = props => {
    return <label
        className="pb-2 text-sm text-primary-light block"
        {...props} />
}

const TextInput: FC<InputHTMLAttributes<HTMLInputElement> & { hasError: boolean }> = props => {
    const color = props.hasError ? 'border-red-500' : "border-primary-light"
    return <input
        type='text'
        className={`w-full text-white px-3 py-2 bg-transparent border ${color} hover:border-white focus:border-white rounded`}
        {...props} />
}

const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError: boolean }> = props => {
    const color = props.hasError ? 'border-red-500' : "border-primary-light"
    return <textarea
        className={`w-full text-white px-3 py-2 bg-transparent border ${color} hover:border-white focus:border-white rounded`}
        {...props} />
}

const Submit: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
    return <button
        type='submit'
        className='border border-brand rounded px-4 py-1 text-primary text-sm bg-brand transition-all hover:shadow-xl hover:shadow-brand-light'
        {...props}
    />
}

const Error: FC<HTMLAttributes<HTMLParagraphElement>> = props => {
    return <p
        className="text-red-500"
        {...props}
    />
}

export default function ContactForm() {
    const [error, setError] = useState('')

    const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()
        setError('')

        const data = {
            // @ts-ignore
            name: e.target.name?.value,
            // @ts-ignore
            email: e.target.email?.value,
            // @ts-ignore
            message: e.target.message?.value,
        }

        if (!data.name?.length) return setError('Name required')
        if (!data.message.length) return setError('Message required')
        if (Boolean(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) return setError('Invalid email')

        try {
            const r = await fetch('/api/contact', {
                method: 'post',
                body: JSON.stringify(data),
            })
            console.log('response', r)
        } catch (e) {
            console.error(e)
            setError('Error')
        }
    }

    return (
        <div className="bg-primary">
            <form onSubmit={onSubmit}>
                <Container className="py-24 space-y-8 max-w-prose">
                    <Supertitle className="text-white">Get in touch</Supertitle>
                    <div>
                        <Label htmlFor='name'>Name</Label>
                        <TextInput hasError={error === 'Name required'} maxLength={300} placeholder='Name...' name='name' />
                    </div>
                    <div>
                        <Label htmlFor='name'>Email</Label>
                        <TextInput hasError={error === 'Invalid email'} maxLength={300} placeholder='Email...' name='email' />
                    </div>
                    <div>
                        <Label htmlFor='name'>Message</Label>
                        <TextArea hasError={error === 'Message required'} maxLength={5000} placeholder='Message...' name='message' />
                    </div>
                    <div className="flex space-x-4 items-center justify-end">
                        <Error>{error}</Error>
                        <Submit>
                            Submit
                        </Submit>
                    </div>
                </Container>
            </form>
        </div>
    )
}