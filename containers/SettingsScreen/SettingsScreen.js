// @578+;?/)-&-(8} onPress={() => showThemeSelect()}>
                    Select Theme
                </Button>
                <Button style={styles.button} onPress={() => showAbout()}>
                    About
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
      marginBottom: 30,
    },
    button: {
        width: 200,
        marginBottom: 10
    }
});

export default connect(
    (state) => state,
    { showThemeSelect, showAbout }
)(SettingsScreen);
