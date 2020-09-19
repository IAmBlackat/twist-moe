import React from 'react';
import MainPage from './pages/MainPage';
import { Switch, Route } from 'react-router-dom';

import { AnimePage } from './pages/AnimePage';
import { animeList } from './utils/animes';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {animeList().map((anime) => (
        <Route
          exact
          path={anime.url}
          render={() => <AnimePage title={anime.title} />}
        />
      ))}
    </Switch>
  );
};
