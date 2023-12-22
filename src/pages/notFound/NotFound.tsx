import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/**
 * Se inicializa el componente NotFound y se establecen su estilos
 * @returns Componente renderizado
 */

export default function NotFound() {
  
  const TitleView = styled.h1`
    color: red;
    font-weight: 100;
  `;

  const DescriptionView = styled.p`
    color: white;
    font-weight: bold;
  `;

  return (
    <>
     <section className="flex h-screen w-screen flex-1 flex-col justify-center px-6 py-12 lg:px-">
        <div className="text-center">
          <blockquote className="text-gray-900">
            <TitleView>404 - No Encontrado</TitleView>
          </blockquote>
          <DescriptionView className="text-sm md:text-base lg:text-lg mt-10">
            ¡Oops! La página que estás buscando no pudo ser encontrada.
          </DescriptionView>
          <DescriptionView className="text-sm md:text-base lg:text-lg mt-2">
            Por favor, verifica la URL o regresa a la página de 
            <Link to='/' className="text-blue-500 hover:underline ml-1">inicio</Link>.
          </DescriptionView>
        </div>
      </section>
    </>
  );
}
