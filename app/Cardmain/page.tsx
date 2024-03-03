"use client"

import { useState } from 'react';
import { Avatar, Text, Button, Paper, Group, Anchor } from '@mantine/core';
import { IconPhoneCall, IconAt, IconWorldWww, IconUserPlus,IconTrash, IconUserMinus, IconStar } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';
import linksstyle from './Link.module.css'


function generateAvatarUrl(userName: string): string {
    const apiUrl = 'https://api.dicebear.com/7.x/initials/svg';
    const seed = encodeURIComponent(userName);
    return `${apiUrl}?seed=${seed}`;
  } 


 function Cardmain({ user, onDelete }: { user: any, onDelete: any }) {
    
   const [isFollowing, setIsFollowing] = useState(false);

   const handleFollowToggle = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };
    const avatarUrl = generateAvatarUrl(user.name);
    return (
  
    <Group wrap="wrap" justify='center'>
      <Paper radius="md" withBorder p="md" w={300}  bg="var(--mantine-color-body)">
          <Avatar src={avatarUrl} alt={`Avatar for ${user.name}`}  size={110} radius={110} mx="auto" />
        <Text ta="center" fz="lg" p="md" fw={500} mt="md">
          {user.name}{isFollowing?<span style={{ paddingLeft:6, paddingTop:2}}><IconStar color='#000000'  size="1rem" className={classes.icon}/></span>:null}
        </Text>
        <Group wrap="nowrap" gap={4} mt={3}>
        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
        <Text ta="center" c="dimmed" fz="sm">
        <Anchor target='_blank' underline='hover' c='dimmed' type='email' href={`mailto:${user.email}`} >
            {user.email} 
        </Anchor>
        </Text>
  
        </Group>
  
        <Group wrap="nowrap" gap={4} mt={3}>
        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
        <Text ta="center" c="dimmed" fz="sm">
        <Anchor target='_blank' underline='hover' c='dimmed'  href={`tel:${user.phone}`}>
          {user.phone}
        </Anchor> 
        </Text>
  
      </Group>
        <Group wrap="nowrap" gap={4} mt={3}>
        <IconWorldWww stroke={1.5} size="1rem" className={classes.icon} />
       
      <Text ta="center" c="dimmed" fz="sm">
        <a className={linksstyle.customLink} href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
          {user.website}
        </a>
      </Text>  
        </Group>
        <Group  wrap="nowrap" gap={4} mt={3}>
       
        {isFollowing ? (
            <Button variant="default" fullWidth mt="md" onClick={handleFollowToggle}>
              <IconUserMinus color="#000000" stroke={1.5} size="1rem" className={classes.icon} />
              <span style={{ color: '#000000', paddingLeft: '10px' }}>Unfollow</span>
            </Button>
          ) : (
            <Button variant="primary" fullWidth mt="md" onClick={handleFollowToggle}>
              <IconUserPlus color="white" stroke={3} size="1rem" className={classes.icon} />
              <span style={{ paddingLeft: '10px' }}>Follow</span>
            </Button>
          )}
        
        <Button px={24} variant="default" fullWidth mt="md" onClick={onDelete}>
          <IconTrash color='#3498DB' stroke={1.5} size="1rem" className={classes.icon} /> 
          <span style={{color:"#3498DB", paddingLeft:"10px"}}>Delete</span>
        </Button>
        </Group>
      </Paper>
  
      </Group>
    );
  }

  export default Cardmain