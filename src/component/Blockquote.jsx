import { Blockquote } from 'flowbite-react';

function Component() {
  return (
    <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
        "The place is amazing, quite and felt like  escape from all stress, the host is very 
        helpful and friendly, i highly recommend the place and the host. 5 stars and even more. "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
      </figcaption>
    </figure>
  );
}
