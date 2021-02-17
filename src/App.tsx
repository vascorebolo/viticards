
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import cards from './cards';
import CardShow from './components/card.show';
class App extends React.Component {
  render() {
    const card = cards.buyer

    return (
      <>
        <h1>
          <CardShow name={card.name} description={card.description} />
        </h1>
      </>
    );
  }
}

export default hot(App);
