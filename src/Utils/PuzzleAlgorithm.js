class Node {
  // A class representing an Solver node
  //   - 'puzzle' é a instância
  //   - 'parent' nó gerado pelo solver, se houver
  //   - 'action' ação tomada para o quebra-cabeça, se houver

  constructor(puzzle, parent=null, action=null) {
    this.puzzle = puzzle;
    this.parent = parent;
    this.action = action;
    if (this.parent != null) {
        this.g = parent.g + 1;
    } else {
        this.g = 0;
    }
}

  score() {
    return this.g + this.h;
  }

  state() {
    return str(this);
  }

  path() {
    ([node, p] = this), [];
    while (node) {
      p.push(node);
      node = node.parent;
    }
    return p.reverse();
  }

  solved() {
    return this.puzzle.solved();
  }

  actions() {
    return this.puzzle.actions();
  }

  h() {
    return this.puzzle.manhattan;
  }

  f() {
    return this.h + this.g;
  }
}

class Solver {
  // um solucionador '8-puzzle' solver
  //  'start' é uma instância Puzzle

  constructor(start) {
    this.start = start;
  }

  solve() {
    // Executa a primeira pesquisa em largura e retorna um
    // caminho, se houver

    queue = collections.dequeue([Node(this.start)]);
    seen = set();
    seen.push(queue[0].state);
    while (queue) {
      queue = collections.dequeue(
        queue.sort((a, b) => {
          if (a.f > b.f) return 1;
          if (a.f < b.f) return -1;
          return 0;
        })
      );
      node = queue.shift();
      if (node.solved) {
        return node.path;
      }
      node.actions.forEach(move, (action) => {
        child = Node(move(), node, action);
        if (!(seen.indexOf("child.state") !== -1)) {
          queue.unshift(child);
          seen.push(child.state);
        }
      });
    }
  }
}

class Puzzle {
  constructor(board) {
    this.width = board[0].length;
    this.board = board;
  }

  solved() {
    var N = this.width * this.width;
    return srt(this) === "".join(srt(range(N))) + 0;
  }

  actions() {
    createMove = (at, to) => {
      return this._move(at, to);
    };

    var moves = [];

  }
}
