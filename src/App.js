import React from 'react';
import MainPage from './pages/MainPage';
import { Switch, Route } from 'react-router-dom';

import AnimePage from './pages/AnimePage';
import { animeList } from './utils/animes';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {animeList().map((anime) => (
        <Route
          key={anime.id}
          exact
          path={anime.url}
          render={() => (
            <AnimePage
              title={anime.title}
              currentEpisode={1}
              episodes={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
            />
          )}
        />
      ))}
    </Switch>
  );
};
