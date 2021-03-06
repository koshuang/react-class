import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';

export const TodoList = () => {
  const [allTodoItems, setTodoItems] = useState([]);
  const [pageTodoItems, setPageTodoItems] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = React.useState([0]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodoItems(data);
      });
  }, []);
  useEffect(() => {
    const start = 10 * (page - 1);
    const end = 10 * page;
    setPageTodoItems(allTodoItems.slice(start, end));
  }, [allTodoItems, page]);
  const handleToggle = todoItem => () => {
    const currentIndex = checked.indexOf(todoItem);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todoItem);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const onPageChange = (event, page) => {
    setPage(page);
  };

  return (
    <Grid container justifyContent="center" direction="column" alignItems="center" spacing={3}>
      <List>
        {pageTodoItems.map((todoItem, index) => {
          return (
            <ListItem key={index} role={undefined} dense button onClick={handleToggle(todoItem)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(todoItem) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={todoItem.title} />
            </ListItem>
          );
        })}
      </List>
      <Pagination count={20} onChange={onPageChange} />
    </Grid>
  );
};
