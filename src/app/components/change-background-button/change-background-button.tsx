import React from 'react';

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

export class ChangeBackgroundButton extends React.Component {
  state = {
    bgColor: '#ffffff',
  };

  handleChangeColor = () => {
    this.setState({ bgColor: getRandomColor() });
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.bgColor, padding: '20px' }}>
        <button onClick={this.handleChangeColor}>
          Change Background Color
        </button>
      </div>
    );
  }
}