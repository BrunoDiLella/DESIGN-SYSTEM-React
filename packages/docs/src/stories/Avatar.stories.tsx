import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@brunogon/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/brunodilella.png',
    alt: 'Bruno Gonçalves',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
