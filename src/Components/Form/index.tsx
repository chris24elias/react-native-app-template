import * as React from 'react';
import {TextInput, ViewStyle, ScrollViewProps} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: JSX.Element | JSX.Element[];
  register;
  setValue;
  errors;

  //   ------------------------
  scrollview?: boolean;
  showsVerticalScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
  scrollViewProps?: ScrollViewProps;
}

export default ({
  contentContainerStyle,
  scrollview,
  showsVerticalScrollIndicator,
  scrollViewProps,
  children,
  register,
  setValue,
  errors,
}: Props) => {
  const InputRefs = React.useRef<any[]>([]);
  const InputNames = React.useRef<string[]>([]);

  React.useEffect(() => {
    InputNames?.current?.forEach((name) => {
      register({name});
    });
  }, [register]);

  const parseChildren = (
    children: any,
    counter: {count: number} = {count: 0},
  ): any => {
    return (Array.isArray(children) ? [...children] : [children]).map(
      (child) => {
        if (child?.props?.children?.type && child?.props?.name) {
          return parseChildren(child?.props?.children, counter);
        }
        console.log('child', child?.props);
        return child?.props?.name ? parseChild(counter, child) : child;
      },
    );
  };

  const focusNextTextInput = (index) => {
    // find next textinput ref and focus it

    for (let i = index + 1; i < InputRefs.current.length; i++) {
      const input = InputRefs.current[i];
      if (input?.focus) {
        input.focus();
        return;
      }
    }

    // if no textinputs found, just blur

    InputRefs?.current[index]?.blur();
  };

  const parseChild = (counter: {count: number}, child: any) => {
    let index = counter.count;
    counter.count++;
    return React.createElement(child.type, {
      ...{
        ...child.props,
        ref: (e: TextInput) => {
          // register({name: child.props.name});
          InputRefs.current[index] = e;
          InputNames.current[index] = child.props.name;
        },
        onChangeText: (v: string) => setValue(child.props.name, v, true),
        onSubmitEditing: () => {
          focusNextTextInput(index);
        },
        // blurOnSubmit: false,
        key: child.props.name,
        error: errors[child.props.name],
      },
    });
  };

  if (scrollview) {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        contentContainerStyle={contentContainerStyle}
        enableResetScrollToCoords={false}
        extraScrollHeight={50}
        extraHeight={100}
        keyboardShouldPersistTaps={'handled'}
        {...scrollViewProps}>
        {parseChildren(children)}
      </KeyboardAwareScrollView>
    );
  }

  return <>{parseChildren(children)}</>;
};
