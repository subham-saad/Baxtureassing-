import { Avatar, Text, Button, Paper, Group, SimpleGrid } from '@mantine/core';
import { IconPhoneCall, IconAt, IconWorldWww, IconUserPlus,IconTrash } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';
import cardclasses from './Card.module.css'
import Link from 'next/link';
import linksstyle from './Link.module.css'


function generateAvatarUrl(userName: string): string {
    const apiUrl = 'https://api.dicebear.com/7.x/initials/svg';
    const seed = encodeURIComponent(userName);
    return `${apiUrl}?seed=${seed}`;
  } 


export default function Cardmain({ user }: { user: User }) {

    const avatarUrl = generateAvatarUrl(user.name);
    return (
  
    <Group wrap="wrap" justify='center'>
      <Paper radius="md" withBorder p="md" w={300}  bg="var(--mantine-color-body)">
          <Avatar src={avatarUrl} alt={`Avatar for ${user.name}`}  size={110} radius={110} mx="auto" />
        <Text ta="center" fz="lg" p="md" fw={500} mt="md">
          {user.name}
        </Text>
        <Group wrap="nowrap" gap={4} mt={3}>
        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
        <Text ta="center" c="dimmed" fz="sm">
          {user.email} 
        </Text>
  
        </Group>
  
        <Group wrap="nowrap" gap={4} mt={3}>
        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
        <Text ta="center" c="dimmed" fz="sm">
        <a className={linksstyle.customLink}  target='_blank'  href={`${user.phone}`}>
          {user.phone}
        </a> 
        </Text>
  
      </Group>
        <Group wrap="nowrap" gap={4} mt={3}>
        <IconWorldWww stroke={1.5} size="1rem" className={classes.icon} />
       
      <Text ta="center" c="dimmed" fz="sm">
        <Link style={{ textDecoration: 'none', color: 'inherit' }}  href={user.company.bs} target="_blank" rel="noopener noreferrer">
          {user.company.bs}
        </Link>
      </Text>  
        </Group>
        <Group  wrap="nowrap" gap={4} mt={3}>
       
        <Button variant="primary" fullWidth mt="md">
        <IconUserPlus color='white' stroke={3} size="1rem" className={classes.icon}  />
          <span style={{paddingLeft:"10px"}}>Follow</span>
        </Button>
        
        <Button px={24} variant="default" fullWidth mt="md">
          <IconTrash color='#3498DB' stroke={1.5} size="1rem" className={classes.icon} /> 
          <span style={{color:"#3498DB", paddingLeft:"10px"}}>Delete</span>
        </Button>
        </Group>
      </Paper>
  
      </Group>
    );
  }