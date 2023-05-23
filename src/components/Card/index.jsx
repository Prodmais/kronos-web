import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import styles from './card.module.css';
import { Delete, Edit } from '@mui/icons-material';
import { useEffect } from 'react';

const BoardCard = ({ title, tasks, openEditTask, openDeleteTask }) => {

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 25,
        height: 25,
        fontSize: '0.6em'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      variant: 'circle',
    };
  }

  return (
    <Card sx={{
      backgroundColor: 'transparent',
      border: '1px solid #0c46464d',
      borderRadius: '10px',
      minWidth: 350,
      width: '100%',
      minHeight: 500,
      maxHeight: 800,
      position: 'relative',
    }}>

      <CardHeader className={styles.card_header} title={title} >

        <Typography variant='h2' sx={{
          fontSize: 20, fontWeight: 600
        }} gutterBottom>
          {title}
        </Typography>

      </CardHeader>

      <CardContent className={styles.card_content} sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        margin: '72px 0',
        overflow: 'auto',
        height: 'calc(100% - 80px)',
      }} >
        {tasks.length ? tasks.map(task => (

          <div key={task.id} style={{
            backgroundColor: '#ffff',
            padding: '20px',
            borderRadius: 8,
            maxheight: 260,
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
          }}>
            <Typography variant="h5" sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 18,
              fontWeight: 600,
              maxHeight: '50px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }} component="div">
              <span
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >{task.name}</span>
              <div className={styles.task_actions}>
                <button
                  className={styles.edit}
                  type='button'
                  onClick={() => openEditTask(task)}
                >
                  <Edit sx={{
                    color: '#7C7C7C',
                    fontSize: '1em'
                  }} />
                </button>
                <button
                  className={styles.delete}
                  type='button'
                  onClick={() => openDeleteTask(task)}
                >
                  <Delete sx={{
                    color: '#7C7C7C',
                    fontSize: '1em'
                  }} />
                </button>
              </div>
            </Typography>

            <Typography sx={{
              mb: 1.5,
              flexGrow: 0,
              maxHeight: '220px',
              overflowY: 'auto',
              textOverflow: 'ellipsis'
            }} color="#756966">
              {task.description}
            </Typography>

            <div className={styles.card_footer}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#043434',
                backgroundColor: '#058B8A4D',
                width: 'max-content',
                padding: '5px 10px',
                borderRadius: '8px',
                fontSize: '0.9em',
                fontWeight: 600,
                'p': {
                  height: 'min-content'
                }
              }} variant="body2">
                criado em: {new Date(task.createdAt).toLocaleDateString('pt')}
              </Typography>
              <span 
                title={`${task.User.name.split(' ')[0]} ${task.User.lastName}`}
                className={styles.owner_span}>
                <Avatar {...stringAvatar(`${task.User.name.split(' ')[0]} ${task.User.lastName}`)} />
              </span>
            </div>

          </div>

        ))
          : <>

            <div className={styles.board_item}>
              <Typography sx={{
                display: 'flex',
                color: '#756966',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                backgroundColor: '#FFF',
                borderRadius: '8px',
                mb: 1.5
              }} color="text.secondary">
                Não há tarefas em {title}
              </Typography>
            </div>

          </>

        }

      </CardContent>
    </Card>
  )
};

export default BoardCard;