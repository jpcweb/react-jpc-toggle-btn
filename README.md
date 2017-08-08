# Toggle button for react native

## Usage

### Install with npm

```sh
npm install react-jpc-toggle-btn
```

### In your project

Import the library
```javascript
import ToggleBtn from 'react-jpc-toggle-btn'
```

You can use it in anywhere
```html
<ToggleBtn onLabel="ON" offLabel="OFF" offColor="#ccc" onColor="#6eddd9" />
```

By adding the onPress attribut you can get the button status 
```javascript
getToggleStatus = (state) => {
    console.log(state)
}
```

### Full example
```html
<ToggleBtn onPress={this.getToggleStatus} onLabel="ON" offLabel="OFF" offColor="#ccc" onColor="#6eddd9" />
```

![Image](https://github.com/jpcweb/react-jpc-toggle-btn/blob/master/illustration.jpg)

## License

MIT
