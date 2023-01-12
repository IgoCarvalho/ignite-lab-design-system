import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { CheckBox } from '../components/CheckBox';
import { Heading } from '../components/Heading';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsUserSignedIn(true);
  }

  return (
    <main className="w-screen h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4" asChild>
          <h1>Ignite Lab</h1>
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[400px] mt-10"
      >
        {isUserSignedIn && (
          <Text className="px-3 py-1 self-center text-white bg-cyan-300/25 border border-cyan-300 rounded-full">
            Login realizado! 🎉
          </Text>
        )}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="jhondoe@example.com"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />

          <Text className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </main>
  );
}
