Login.widgets = {
	main_layout: ["wm.Layout", {"height":"100%","verticalAlign":"top","autoScroll":false}, {}, {
		panel1: ["wm.Panel", {"height":"189px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
		loginMainPanel: ["wm.Panel", {"height":"353px","layoutKind":"left-to-right","padding":"10"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"254px","width":"366px","border":"1","padding":"10","borderColor":"#bbb"}, {}, {
				logo_new: ["wm.Picture", {"height":"110px","border":"0","width":"100%","source":"resources/images/logos/logo_aprendoz_nuevo.png","aspect":"v"}, {}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"28px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"28px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"39px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4"}, {}, {
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_FontColor_White","wm_FontSizePx_12px","wm_BackgroundColor_White"]},"height":"100%","width":"80px","caption":"Acceder","border":"0","margin":"0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"15px"}, {}],
				loginErrorMsg: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"0%","border":"0","caption":" ","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel4: ["wm.Panel", {"height":"38px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"35px","width":"100%","border":"1","caption":"¿No puedes acceder a tu cuenta?","align":"center","link":"http://aprendoz.rochester.edu.co/forgot-password","borderColor":"#bbb"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		footer: ["wm.Layers", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar","wm_FontSizePx_12px"]},"height":"45px"}, {}, {
			layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label1: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"Colegio Rochester  © Apredoz - 2013-2014","align":"center"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}