
export default class Game {
    private players: string[];
    private timeLimit: number;
    private byoYomi: number;
    private komi: number;
    private size: number[];
    private scoringSystem: string;
    private id: string;
    private byoPds: number;
    private board: (string | null)[][] = [];
    public constructor(players, timeLimit, byoYomi=30, byoPds=5, komi=6.5, size=[19,19], scoringSystem="japanese", id="") {
        this.players = players;
        this.timeLimit = timeLimit*60; //returns time limit in seconds
        this.byoYomi = byoYomi;
        this.komi = komi;
        this.size = size;
        this.scoringSystem = scoringSystem;
        this.id = id;
        this.byoPds = byoPds;
        this.board = Array.from({ length: size[0] }, () => Array(size[1]).fill(null));
    }

    setBoard() {
        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                this.board[i][j] = null;
            }
        }
    }

//     getBoard() {
//         return {
//             players: this.players,
//             timeLimit: this.timeLimit,
//             byoYomi: this.byoYomi,
//             komi: this.komi,
//             size: this.size,
//             scoringSystem: this.scoringSystem
//         }
//     }

//     updateBoard(move) {
//         //update the board with the move
//         this.board.push(move);

//     }

//     pushBoard() {

//     }

//     pushMove(move) {

//     }
//     playerAdd(player) {
//         if (this.players.length >= 2) {
//             //check if max amt of players are in the game
//             this.players.push(player)
//             return true;
//             //return true in order to render the game
//         }
//         return false;
//         //return false in order to render "game full" UI.
//     } //bool return in order to check later on to see if the operation was successful
//     playerRemove(player) {
//         const index = this.players.indexOf(player);
//         if (index > -1) {
//             this.players.splice(index, 1);
//             return true;
//         }
//         return false;
//     } //bool return in order to check later on to see if the operation was successful


// }
}