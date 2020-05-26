import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.less'


@inject('counterStore')
@observer
class Person extends Component {

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
 
  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
     person
      </View>
    )
  }
}

export default Person 
