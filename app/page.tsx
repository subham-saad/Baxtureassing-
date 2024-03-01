"use client"

import { useEffect, useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import Cardmain from './Cardmain/page';
interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  company: {
    bs: string;
  };
}

export default function HomePage() {
  const [userData, setUserData] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = (userId: number) => {
    
    setUserData((prevUserData) => prevUserData?.filter((user) => user.id !== userId) || null);
  };

  if (!userData) {
    return null;
  }


  if (!userData) {
    return null; 
  }

  return (
    <div>
     <SimpleGrid
      my={6}
      mx={24}
      ms={20}
      cols={{ base: 1, sm: 3,  md:3, lg: 4, xl: 5 }}
      spacing={{ base: 6, sm: 'xl', md:'md', lg:'sm', xl:'xs' }}
      verticalSpacing={{ base: 'xl', sm: 'xl' }}
    >
    {userData.map((user) => (
          <Cardmain key={user.id} user={user} onDelete={() => handleDelete(user.id)} />
      ))}
    </SimpleGrid >
   
    </div>
  );
}




 

