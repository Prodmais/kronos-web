import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import styles from './card.module.css';

const BoardCard = ({ title, tasks }) => {

    return (
        <Card sx={{
          backgroundColor: 'transparent',
          border: '1px solid #0c46464d',
          borderRadius: '10px',
          minWidth: 350, 
          width: '100%' ,
          height: 600,
          position: 'relative',
        }}>

            <CardHeader className={styles.card_header} title={title} >

                <Typography variant='h2' sx={{ 
                  fontSize: 20, fontWeight: 600 }}  gutterBottom>
                  { title }
                </Typography>

            </CardHeader>

            <CardContent className={styles.card_content}  sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              margin: '72px 0',
              overflow: 'auto',
              height: 530
            }} >
              { tasks.length ? tasks.map(task => (

                <div key={task.title} style={{
                  backgroundColor: '#ffff',
                  padding: '20px',
                  borderRadius: 8,
                  height: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 15,
                }}>
                  <Typography variant="h5" sx={{ 
                    fontSize: 18, 
                    fontWeight: 600, 
                    height: '50px', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                  }} component="div">
                    { task.title }
                  </Typography>

                  <Typography sx={{ mb: 1.5, flexGrow: 1 }} color="#756966">
                    { task.description }
                  </Typography>

                  <Typography sx={{
                    color: '#043434',
                    backgroundColor: '#058B8A4D',
                    width: 'max-content',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    fontSize: '0.9em',
                    fontWeight: 600,
                  }} variant="body2">
                    criado em: { task.createdAt.toLocaleDateString('pt') }
                  </Typography>
                
                </div>

              ))

                
                
              : <>

                <div className={styles.board_item}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Não há tarefas em { title }
                  </Typography>
                </div>

              </>

              }

            </CardContent>
    </Card>
    )
};

export default BoardCard;