import type { NextPage } from 'next'
import {FormEvent, useState} from "react";
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';



const eventUrl = process.env.NEXT_PUBLIC_STREAMING_APP_URL;
const eventName = "useParams();"

const Home: NextPage = () => {

    const { query } = useRouter();
    
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [tuition, setTuition] = useState('');


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        let form = {
            name,
            lastName,
            email,
            phone,
            message,
            tuition
        }

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        // alert(content.data.tableRange)

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setLastName('')
        setEmail('')
        setTuition('')
    }

    return (
        <>
        <Main
        url={`${eventUrl}/${eventName}/${query.c}`}
        date={new Date(2024, 11, 24, 10, 33, 30, 0).toLocaleString()}
      />
      
        <main className="flex flex-col items-center bg-gray-100 min-h-screen"  style={{ backgroundImage: "url(/images/fondo.png)" }}>
        <h1 className="font-Montserrat font-bold text-white text-xl md:text-xl lg:text-3xl" >Registrate</h1>
            <div className="max-w-5xl ">
                <form className="flex   flex-col py-4 " onSubmit={handleSubmit}>
                    <div className="flex flex-row">
                        <div className=" flex  flex-col space-y-4">
                            
                            <div className="flex items-center justify-center">
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full" placeholder="Your Name" />
                            </div>
                            <div className="flex items-center justify-center">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full" placeholder="Your Email" />
                            </div>
                            <div className="flex items-center justify-center">
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full" placeholder="Your Phone" />
                            </div>
                            <div className="flex items-center justify-center">
                                <label htmlFor="phone" className="sr-only">tuition</label>
                                <input value={tuition} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Phone" />
                            </div>
                
                            <select >
                                <option value="grapefruit">Restricción alimentaria</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                                

                                <div className="flex items-center justify-start text-white">
                                <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    />Declaro ser Profesional de la Salud
                                </label>
                                </div>
                                <div className="flex items-center justify-start text-white">
                                <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    />Default
                                </label>
                                </div>
                                <div className="flex items-center justify-start text-white">
                                <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    />Acepto Bases y Condiciones
                                </label>
                                </div>

                            {/* <div className="flex items-center justify-center">
                                <label htmlFor="message" className="sr-only">Matricula</label>
                                <textarea value={tuition} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Message" />
                            </div> */}

                        </div>
                        <div className=" flex justify-start flex-col space-y-4">
                            <div className="flex items-center justify-center">
                                <label htmlFor="name" className="sr-only">Apellido</label>
                                <input value={lastName} onChange={e => setName(e.target.value)} type="text" name="lastName" id="lastName" className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full" placeholder="Apellido" />
                            </div>
                            <select className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full ">
                                <option value="grapefruit">Especialidad</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            <select className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full " >
                                <option value="grapefruit">Sede evento</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            <select className="border-b-2 border-yellow focus:border-yellow bg-transparent text-white font-Montserrat rounded-full " >
                                <option value="grapefruit">Cochera</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>

        
                            {/* <div className="flex items-center justify-center">
                                <label htmlFor="message" className="sr-only">Matricula</label>
                                <textarea value={tuition} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Message" />
                            </div> */}

                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                            <button type="submit" className="text-white bg-lightgreen font-Montserrat mt-0 font-bold py-2 px-10 border border-lightgreen  rounded-full flex flex-col justify-content align-content-center items-center mt-7 md:mt-9 xl:mt-90">REGISTRAR</button>
                    </div> 
                </form>
            </div>
        </main>
        {/* <div className="flex items-center bg-black">
            <div className="flex-1 mx-auto px-8 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-4">
                <div className="md:col-span-3 bg-purple-500 rounded-lg shadow-xl h-auto text-white font-Montserrat text-xs">
                    LEGALES Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="md:col-span-3 bg-purple-500 rounded-lg shadow-xl flex justify-end">
                    <a href="#">
                    <img
                        className="max-w-[188px] md:max-w-[188px] xl:max-w-[188px]"
                        src="/images/logo.png"
                        alt="logo"
                    />
                    </a>
                </div>
                </div>
            </div>
        </div> */}
        <Footer />
        </>
        
    )
}

export default Home
