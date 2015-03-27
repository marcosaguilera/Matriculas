Login.widgets = {
	main_layout: ["wm.Layout", {"height":"100%","verticalAlign":"top","autoScroll":false}, {}, {
		panel1: ["wm.Panel", {"height":"324px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}],
		loginMainPanel: ["wm.Panel", {"height":"353px","layoutKind":"left-to-right","horizontalAlign":"center","padding":"10"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%","showing":false}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"254px","width":"366px","border":"1","padding":"10","borderColor":"#bbb"}, {}, {
				logo_new: ["wm.Picture", {"height":"110px","border":"0","width":"100%","source":"resources/images/logos/logo_aprendoz_nuevo.png","aspect":"v"}, {}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"36px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"36px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"39px","layoutKind":"left-to-right","horizontalAlign":"right","padding":"4"}, {}, {
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_FontColor_White","wm_FontSizePx_12px","wm_BackgroundColor_White"]},"height":"100%","width":"80px","caption":"Acceder","border":"0","margin":"0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"15px"}, {}],
				loginErrorMsg: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"0%","border":"0","align":"center","caption":" "}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel4: ["wm.Panel", {"height":"38px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"35px","width":"100%","border":"1","align":"center","caption":"¿No puedes acceder a tu cuenta?","link":"http://aprendoz.rochester.edu.co/forgot-password","borderColor":"#bbb"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"285px","width":"500px","horizontalAlign":"left","verticalAlign":"top","showing":false}, {}, {
				panel5: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"height":"168px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"middle","showing":false}, {}, {
					picture1: ["wm.Picture", {"height":"93px","border":"0","width":"350px","source":"http://aprendoz.rochester.edu.co/recursos/logo_aprendoz_nuevo.png","aspect":"v"}, {}]
				}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"100%","border":"0","align":"center","caption":"Aprendoz Matrículas estará disponible a partir del Martes 17 Junio de 2014","singleLine":false,"showing":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"100%","border":"0","align":"center","caption":"Para mas información por favor comuníquese al 749 60 00 Ext.  ","showing":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%","showing":false}, {}]
		}],
		spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		footer: ["wm.Layers", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar","wm_FontSizePx_12px"]},"height":"45px"}, {}, {
			layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}, {
					label1: ["wm.Label", {"height":"100%","width":"100%","border":"0","align":"center","caption":"Colegio Rochester  © Aprendoz - 2014-2015"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}