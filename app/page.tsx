"use client"

import { useEffect, useState } from 'react';
import { Avatar, Text, Button, Paper, Group, SimpleGrid } from '@mantine/core';
import { IconPhoneCall, IconAt, IconWebhook, IconFriends } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';
import cardclasses from './Card.module.css'
import Link from 'next/link';
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
    // Update state to remove the user with the specified ID
    setUserData((prevUserData) => prevUserData?.filter((user) => user.id !== userId) || null);
  };

  if (!userData) {
    return null;
  }


  if (!userData) {
    return null; // You can render a loading state or handle it as per your UI design
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

interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  company: {
    bs: string;
  };
}

// function generateAvatarUrl(userName: string): string {
//   const apiUrl = 'https://api.dicebear.com/7.x/initials/svg';
//   const seed = encodeURIComponent(userName);
//   return `${apiUrl}?seed=${seed}`;
// }

// function Cardmain({ user }: { user: User }) {

 

//   const avatarUrl = generateAvatarUrl(user.name);
//   return (

//   <Group wrap="nowrap">
//     <Paper radius="md" withBorder p="md" w={300}  bg="var(--mantine-color-body)">
//         <Avatar src={avatarUrl} alt={`Avatar for ${user.name}`}  size={110} radius={110} mx="auto" />
//       <Text ta="center" fz="lg" p="md" fw={500} mt="md">
//         {user.name}
//       </Text>
//       <Group wrap="nowrap" gap={4} mt={3}>
//       <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//       <Text ta="center" c="dimmed" fz="sm">
//         {user.email} 
//       </Text>

//       </Group>

//       <Group wrap="nowrap" gap={4} mt={3}>
//       <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//       <Text ta="center" c="dimmed" fz="sm">
//       <a style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'  href={`${user.phone}`}>
//         {user.phone}
//       </a> 
//       </Text>

//     </Group>
//       <Group wrap="nowrap" gap={4} mt={3}>
//       <IconWebhook stroke={1.5} size="1rem" className={classes.icon} />
     
//     <Text ta="center" c="dimmed" fz="sm">
//       <Link style={{ textDecoration: 'none', color: 'inherit' }}  href={user.company.bs} target="_blank" rel="noopener noreferrer">
//         {user.company.bs}
//       </Link>
//     </Text>  
//       </Group>
//       <Group  wrap="nowrap" gap={4} mt={3}>
//       <Button variant="primary" fullWidth mt="md">
//         <IconFriends   stroke={1.5} size="1rem" className={classes.icon}  />
//         follow
//       </Button>
//       <Button variant="default" fullWidth mt="md">
       
//         delete
//       </Button>
//       </Group>
//     </Paper>

//     </Group>
//   );
// }
