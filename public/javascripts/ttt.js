/** @jsx React.DOM */

var Board = React.createClass({
  getInitialState: function () {
    return {board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            otherStuff: 123};
  },

  handleClickOnCell: function(i) {
    return function () {
      $.ajax({
        url: 'http://localhost:3000/', 
        type: 'POST',
        data: { move: i }, 
        success: function (newBoard) {
          this.setState({board: newBoard['board']});
        }.bind(this),
        dataType: 'json'
      });
    }.bind(this);
  },

  render: function() {
    return (
      <table>
        <tr>
          <td onClick={this.handleClickOnCell(0)}>
            {this.prettyPrint(this.state.board[0])}
          </td>
          <td onClick={this.handleClickOnCell(1)}>{this.prettyPrint(this.state.board[1])}</td>
          <td onClick={this.handleClickOnCell(2)}>{this.prettyPrint(this.state.board[2])}</td>
        </tr>
        <tr>
          <td onClick={this.handleClickOnCell(3)}>{this.prettyPrint(this.state.board[3])}</td>
          <td onClick={this.handleClickOnCell(4)}>{this.prettyPrint(this.state.board[4])}</td>
          <td onClick={this.handleClickOnCell(5)}>{this.prettyPrint(this.state.board[5])}</td>
        </tr>
        <tr>
          <td onClick={this.handleClickOnCell(6)}>{this.prettyPrint(this.state.board[6])}</td>
          <td onClick={this.handleClickOnCell(7)}>{this.prettyPrint(this.state.board[7])}</td>
          <td onClick={this.handleClickOnCell(8)}>{this.prettyPrint(this.state.board[8])}</td>
        </tr>
      </table>
    );
  }
});

React.renderComponent(
  <Board />,
  document.getElementById("board")
);
