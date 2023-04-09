import {
    FC,
    LabelHTMLAttributes,
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    HTMLAttributes,
    useState,
    useRef,
    forwardRef,
    SelectHTMLAttributes,
} from "react";
import Container from "./Container";
import Supertitle from "./Supertitle";
import { CgSpinner } from 'react-icons/cg'
import { useForm } from "react-hook-form";
import classNames from "classnames";
import useNav from "@/hooks/useNav";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ className, ...rest }) => {
    return <label
        className={classNames(className, "pb-0 text-sm text-primary-light block")}
        {...rest} />
}

const TextInputLabel: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ className, ...rest }) => {
    return <label
        className={classNames(className, "pb-2 text-sm text-primary-light block")}
        {...rest} />
}

const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { hasError: boolean }>(({ hasError, ...rest }, ref) => {
    const color = hasError ? "border-red-500" : "border-primary-light"

    return <input
        ref={ref}
        type='text'
        className={`w-full text-white px-3 py-2 bg-transparent border ${color} hover:border-white focus:border-white rounded`}
        {...rest} />
})

const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }>(({ hasError = false, ...rest }, ref) => {
    const color = hasError ? "border-red-500" : "border-primary-light"

    return <select
        ref={ref}
        className={`w-full text-white px-3 py-2 bg-transparent border ${color} hover:border-white focus:border-white rounded`}
        {...rest} />
})

const Submit: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
    return <button
        type='submit'
        className='border border-brand rounded px-4 py-1 text-primary text-sm bg-brand transition-all hover:shadow-xl hover:shadow-brand-light h-[30px]'
        {...props}
    />
}

const Error: FC<HTMLAttributes<HTMLParagraphElement>> = props => {
    return <p
        className="text-red-500"
        {...props}
    />
}

const Success: FC<HTMLAttributes<HTMLParagraphElement>> = props => {
    return <p
        className="text-green-500"
        {...props}
    />
}

export default function ContactForm() {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const ref = useNav('register')

    const onSubmit = handleSubmit(async values => {
        console.log('values', values)
        setLoading(true)
        try {
            const r = await fetch('/api/contact', {
                method: 'post',
                body: JSON.stringify(values),
            })
            if (!r.ok) {
                console.error((await r.json()))
                setSuccess('')
                return setError('Server error')
            }
            setError("")
            setSuccess("Thank you for your interest! We'll be in touch as soon as possible.")
            formRef.current?.reset()
        } catch (e) {
            console.error(e)
            setSuccess('')
            setError('Error')
        }
        setLoading(false)
    })

    return (
        <div ref={ref} id='register-section' className="bg-primary">
            <form onSubmit={onSubmit} ref={formRef}>
                <Container className="py-24 space-y-8 max-w-prose">
                    <Supertitle className="text-white">Register for more information</Supertitle>
                    <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>First name *</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['firstname'])}
                                placeholder='First name...'
                                {...register('firstname', { required: true })}
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>Last name *</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['firstname'])}
                                placeholder='Last name...'
                                {...register('lastname', { required: true })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>Email *</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['firstname'])}
                                placeholder='Email...'
                                {...register('email', {
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                },
                                )}
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>Phone *</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['firstname'])}
                                type='number'
                                placeholder='Phone...'
                                {...register('phone')}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>Company name</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['firstname'])}
                                placeholder='Email...'
                                {...register('company')}
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>Country *</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['firstname'])}
                                placeholder='Country...'
                                {...register('country')}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>Preferred size of space (ex. 1000 sqft) *</TextInputLabel>
                            <TextInput
                                hasError={Boolean(errors['size'])}
                                placeholder='Size...'
                                {...register('size', { required: true })}
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <TextInputLabel htmlFor='name'>How did you hear of us? *</TextInputLabel>
                            <Select defaultValue='Select...' {...register('how')}>
                                <option>Select...</option>
                                <option>Drove by</option>
                                <option>Email</option>
                                <option>Online ads</option>
                                <option>Postcard/mailer</option>
                                <option>Postcard/mailer</option>
                                <option>Print advertising</option>
                                <option>Signage</option>
                                <option>Social media</option>
                                <option>Other</option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <TextInputLabel>Are you a broker?</TextInputLabel>
                        <div className="flex space-x-2 items-center pointer">
                            <input id='yes' type='radio' {...register('broker')} />
                            <Label className='pb-0' htmlFor='yes'>Yes</Label>
                        </div>
                        <div className="flex space-x-2 items-center pointer">
                            <input id='no' type='radio' {...register('broker')} />
                            <Label className='pb-0' htmlFor='no'>No</Label>
                        </div>
                    </div>
                    <div>
                        <TextInputLabel>Opt in *</TextInputLabel>
                        <div className="flex space-x-2 items-center pointer">
                            <input id='optin' type='checkbox' {...register('optin', { required: true })} />
                            <Label className='pb-0' htmlFor='optin'>I consent to receive commerical emails from Purcell</Label>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center justify-end">
                        <Success>{success}</Success>
                        <Error>{error}</Error>
                        <Submit>
                            {loading ? <CgSpinner className='animate-spin h-full' /> : <>Submit</>}
                        </Submit>
                    </div>
                </Container>
            </form>
        </div>
    )
}