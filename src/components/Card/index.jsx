import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import styles from './card.module.css';

const BoardCard = ({ title, tasks }) => {

  /* 
  
   "Tasks": [
            {
                "id": 5,
                "name": "Test 33",
                "description": "test",
                "status": null,
                "endDate": "2023-03-15T14:35:46.143Z",
                "createdAt": "2023-05-18T23:40:27.147Z",
                "updatedAt": "2023-05-18T23:40:27.147Z",
                "boardId": 4,
                "ownerId": null,
                "User": null
            },
            {
                "id": 4,
                "name": "Test 3",
                "description": "test",
                "status": null,
                "endDate": "2023-03-18T14:35:46.143Z",
                "createdAt": "2023-05-18T23:37:18.411Z",
                "updatedAt": "2023-05-18T23:42:50.241Z",
                "boardId": 4,
                "ownerId": 4,
                "User": {
                    "id": 4,
                    "name": "Ruiz",
                    "lastName": "Affonso",
                    "email": "ruiz@gmail.com"
                }
            }
        ]



  */

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
              height: 'calc(100% - 80px)',
            }} >
              { tasks.length ? tasks.map(task => (

                <div key={task.id} style={{
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
                    { task.name }
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
                    criado em: { new Date(task.createdAt).toLocaleDateString('pt') }
                  </Typography>
                
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