import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { type ComponentProps } from 'react';

// Define a union of the valid props for both icon families
interface TabBarIconProps {
  name: ComponentProps<typeof Ionicons>['name'] | ComponentProps<typeof AntDesign>['name'];
  color?: string;
  size?: number;
  style?: any;
  family?: 'Ionicons' | 'AntDesign';
}

export function TabBarIcon({ style, family = 'Ionicons', size = 28, ...rest }: TabBarIconProps) {
  // Dynamically select the correct icon component
  const IconComponent = family === 'Ionicons' ? Ionicons : AntDesign;
  
  // Return the appropriate icon component with the passed props
  return <IconComponent size={size} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
