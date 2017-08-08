import React,{Component} from 'react';
import {StyleSheet,Text,TouchableHighlight,View,Alert} from 'react-native';

const DEFAULT_BG = "#eee";

class ToggleBtn extends Component{
    static defaultProps= {
        onLabel:'ON',
        offLabel:'OFF',
        offColor:'#ccc',
        onColor:'#6eddd9'
    };

    state = {
      wanted: false
    };

    _onPressBtn = () => {
        this.setState({
            wanted: !this.state.wanted
        },()=>{
            this.props.onPress(this.state)
        })
    };

    defaultBg(color,bool){
        return this.state.wanted===bool ? DEFAULT_BG : color;
    }

    setLabel(label,bool){
        return this.state.wanted===bool ? "" : label;
    }

    render(){
        return(
            <TouchableHighlight
                onPress={this._onPressBtn}
                activeOpacity={0.8}
                style={styles.container}
            >
                <View style={styles.viewParent}>
                    <View style={[styles.viewEl,{backgroundColor:this.defaultBg(this.props.offColor,true)}]}>
                        <Text style={styles.text}>
                            {this.setLabel(this.props.offLabel,true)}
                        </Text>
                    </View>
                    <View style={[styles.viewEl,{backgroundColor:this.defaultBg(this.props.onColor,false)}]}>
                        <Text style={styles.text}>
                            {this.setLabel(this.props.onLabel,false)}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginRight:10,
        backgroundColor: DEFAULT_BG
    },
    viewParent: {
        flexDirection: 'row'
    },
    viewEl: {
        flex:1,alignItems:'center',justifyContent: 'center',height:30,width:60
    },
    text:{
        color:'#ffffff',fontWeight:'bold',fontSize:17,textAlign: 'center'
    }
});

export default ToggleBtn;