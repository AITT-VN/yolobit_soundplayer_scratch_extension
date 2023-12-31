const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMzZweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnoiLz48L3N2Zz4=';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitSoundPlayerExtention {

    getInfo () {
        return {
            id: 'YoloBitSoundPlayerExtention',
            parentMode: 'yoloBit',
            name: 'SoundPlayer',
            blockIconURI: iconURL,
            allowBlockTypes: {
            },
            color1: '#cb2026',
            color2: '#cb2026',
            blocks: [
                {
                    opcode: 'init_soundplayer',
                    rawCode: {
                        imports: 'from yolobit_sound_player import *\n',
                        code: 'sound = machine.UART(1, baudrate=9600, rx=/*{RX_PIN}*/.pin, tx=/*{TX_PIN}*/.pin)\n'
                    },
                    text: [
                        {
                            default: 'khởi động máy nghe nhạc chân RX [RX_PIN] chân TX[TX_PIN]',
                            id: "gui.externalExtension.YoloBitSoundPlayerExtension.init_soundplayer"
                        }
                    ],
                    arguments: {
                        RX_PIN: {
                            menu: 'yolobit_pins'
                        },
                        TX_PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND

                },
                {
                    opcode: 'soundplayer_actions',
                    rawCode: {
                        code: 'sound.write(/*{ACTION}*/)\n'
                    },
                    text: [
                        {
                            default: '[ACTION]',
                            id: "gui.externalExtension.YoloBitSoundPlayerExtension.soundplayer_actions"
                        }
                    ],
                    arguments: {
                        ACTION: {
                            menu: 'actions'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'soundplayer_playtrack',
                    rawCode: {
                        code: 'sound.write(play_track(/*{VALUE}*/))\n'
                    },
                    text: [
                        {
                            default: 'phát bài nhạc số [VALUE]',
                            id: "gui.externalExtension.YoloBitSoundPlayerExtension.soundplayer_playtrack"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }, 
                    blockType: Scratch.BlockType.COMMAND 
                },
                {
                    opcode: 'soundplayer_set_volume',
                    rawCode: {
                        code: 'sound.write(set_volume(/*{VALUE}*/))'
                    },
                    text: [
                        {
                            default: 'mở âm lượng [VALUE] (0-30)\n',
                            id: "gui.externalExtension.YoloBitSoundPlayerExtension.soundplayer_set_volume"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 20
                        }
                    }, 
                    blockType: Scratch.BlockType.COMMAND 
                }
            ],
            menus: {
                yolobit_pins: [
                    {
                        text: {
                            default: 'P0',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P0'
                        },
                        value: 'pin0'
                    },
                    {
                        text: {
                            default: 'P1',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P1'
                        },
                        value: 'pin1'
                    },
                    {
                        text: {
                            default: 'P2',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P2'
                        },
                        value: 'pin2'
                    },
                    {
                        text: {
                            default: 'P3',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P3'
                        },
                        value: 'pin3'
                    },
                    {
                        text: {
                            default: 'P4',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P4'
                        },
                        value: 'pin4'
                    },
                    {
                        text: {
                            default: 'P5',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P5'
                        },
                        value: 'pin5'
                    },
                    {
                        text: {
                            default: 'P6',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P6'
                        },
                        value: 'pin6'
                    },
                    {
                        text: {
                            default: 'P7',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P7'
                        },
                        value: 'pin7'
                    },
                    {
                        text: {
                            default: 'P8',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P8'
                        },
                        value: 'pin8'
                    },
                    {
                        text: {
                            default: 'P9',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P9'
                        },
                        value: 'pin9'
                    },
                    {
                        text: {
                            default: 'P10',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P10'
                        },
                        value: 'pin10'
                    },
                    {
                        text: {
                            default: 'P11',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P11'
                        },
                        value: 'pin11'
                    },
                    {
                        text: {
                            default: 'P12',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P12'
                        },
                        value: 'pin12'
                    },
                    {
                        text: {
                            default: 'P13',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P13'
                        },
                        value: 'pin13'
                    },
                    {
                        text: {
                            default: 'P14',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P14'
                        },
                        value: 'pin14'
                    },
                    {
                        text: {
                            default: 'P15',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P15'
                        },
                        value: 'pin15'
                    },
                    {
                        text: {
                            default: 'P16',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P16'
                        },
                        value: 'pin16'
                    },
                    {
                        text: {
                            default: 'P19',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P19'
                        },
                        value: 'pin19'
                    },
                    {
                        text: {
                            default: 'P20',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.P20'
                        },
                        value: 'pin20'
                    }
                ],
                actions: [
                    {
                        text: {
                            default: 'Phát nhạc',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.play'
                        },
                        value: 'play()'
                    },
                    {
                        text: {
                            default: 'Tạm dừng',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.pause'
                        },
                        value: 'pause()'
                    },
                    {
                        text: {
                            default: 'Dừng phát nhạc',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.stop'
                        },
                        value: 'stop()'
                    }, {
                        text: {
                            default: 'Phát bài kế tiếp',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.next'
                        },
                        value: 'play_next()'
                    },
                    {
                        text: {
                            default: 'Phát bài nhạc trước đó',
                            id: 'gui.externalExtension.YoloBitSoundPlayerExtention.previous'
                        },
                        value: 'play_previous()'
                    }
                ]
            }
        };
    }
}
Scratch.extensions.register(new Scratch3YoloBitSoundPlayerExtention());