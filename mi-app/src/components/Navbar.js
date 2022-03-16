import { Component } from "react";
import Button from './Button'

const styles = {
    botones: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
}
class Navbar extends Component{
    render(){
        return(
            <div  style={styles.botones}>
                <Button>
                    Frutas
                </Button>
                <Button>
                    Vegetales
                </Button>
            </div>
        )
    }
}

export default Navbar