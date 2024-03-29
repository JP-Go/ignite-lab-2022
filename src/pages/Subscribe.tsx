import Logo from '../components/Logo';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateSubscriberMutation } from '../graphql/generated';

import codeMock from '../assets/code-mock.png';
import { GithubLogo } from 'phosphor-react';

export default function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();
    await createSubscriber({ variables: { name, email } });

    navigate('/event');
  }

  return (
    <div>
      <div className='bg-gray-700 mt-0 w-full text-right pt-2'>
        <h2 className='inline'>{'Veja o código desse projeto no'}</h2>
        <a
          href={'https://github.com/JP-Go/ignite-lab-2022'}
          target='_blank'
          className='bg-gray-700 rounded inline px-1'
        >
          <div className='bg-gray-700 inline-flex items-center px-1 rounded border border-gray-300 group hover:bg-gray-500'>
            <span className='font-bold text-white pr-1'>{'GitHub'}</span>
            <GithubLogo
              size={20}
              className='inline text-gray-300 group-hover:text-gray-100'
            />
          </div>
        </a>
      </div>

      <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
        <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
          <div className='max-w-[640px]'>
            <Logo />

            <h1 className='mt-8 text-[2.5rem] leading-tight'>
              Construa uma{' '}
              <strong className='text-blue-500'>aplicação completa</strong>, do
              zero, com <strong className='text-blue-500'>React.</strong>
            </h1>

            <p className='mt-4 text-gray-200 leading-relaxed'>
              Em apenas uma semana você vai dominar na prica uma das tecnologias
              mais utilizadas e com alta demanada para acessar as melhores
              oportunidades do mercado.
            </p>
          </div>

          <div className='p-8 bg-gay-700 border border-gray-500 rounded'>
            <strong className='text-2xl mb-6 block'>
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              className='flex flex-col gap-2 w-full'
            >
              <input
                type='text'
                placeholder='Seu nome completo'
                className='bg-gray-900 rounded px-5 h-14'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type='email'
                placeholder='Seu melhor email'
                className='bg-gray-900 rounded px-5 h-14'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                type='submit'
                disabled={loading}
                className='bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src={codeMock} className='mt-10' />
      </div>
    </div>
  );
}
