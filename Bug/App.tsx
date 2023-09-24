/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';

function App(): JSX.Element {
  const sanitizeCommonInput = (name: string) =>
  name
    .replace(
      /[^a-zA-Z0-9 /\-?:().,'+]/gi,
     ''
    );

  const [sanitized, setSanitized] = useState("")

  return (
    <SafeAreaView>
    <TextInput
    textAlignVertical='top'
    style={{borderWidth:1, marginTop:100, marginHorizontal:30, fontSize:16, lineHeight:40, minHeight:200}}
    onChangeText={v => {
    sanitizeCommonInput(v)
    setSanitized(()=> sanitizeCommonInput(v))
    }}
    multiline
    value={sanitized}
       />
    </SafeAreaView>
  );
}

export default App;
