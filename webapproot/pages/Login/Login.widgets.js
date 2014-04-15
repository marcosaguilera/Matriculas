Login.widgets = {
	_____________: ["wm.Layout", {"height":"100%","autoScroll":false}, {}, {
		spacer1: ["wm.Spacer", {"height":"34px","width":"96px"}, {}],
		panel1: ["wm.Panel", {"height":"189px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}, {
			picture1: ["wm.Picture", {"source":"resources/images/LOGO%20APRENDOZ.jpg","height":"183px","border":"0","width":"498px","aspect":"v"}, {}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"280px","padding":"10","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"width":"366px","borderColor":"#CD0000","border":"3","padding":"10"}, {}, {
				usernameInput: ["wm.Editor", {"caption":"Usuario:","height":"28px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña:","height":"28px","captionSize":"110px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"39px","padding":"4","layoutKind":"left-to-right","horizontalAlign":"right"}, {}, {
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontSizePx_14px","wm_TextDecoration_Bold","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"height":"100%","width":"80px","caption":"Acceder","border":"0","margin":"0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"15px"}, {}],
				loginErrorMsg: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"0%","border":"0","caption":" ","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				splitter1: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
				panel4: ["wm.Panel", {"height":"38px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"35px","width":"100%","border":"0","caption":"¿No puedes acceder a tu cuenta?","link":"http://aprendoz.rochester.edu.co/forgot-password","align":"center"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		insertLogin: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left"}, {}],
		spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		footer: ["wm.Layers", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar","wm_FontSizePx_12px"]},"height":"45px"}, {}, {
			layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}, {
					label1: ["wm.Label", {"height":"100%","width":"50%","border":"0","caption":"<center>Colegio Rochester  ● Apredoz© - 2012-2013"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				panel3: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}, {
					label2: ["wm.Label", {"height":"100%","width":"81px","border":"0","caption":"Escribenos a:"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label3: ["wm.Label", {"height":"100%","width":"165px","border":"0","caption":"soporte@rochester.edu.co","link":"mailto:soporte@rochester.edu.co"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label4: ["wm.Label", {"height":"100%","width":"11px","border":"0","caption":"|","align":"center"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label5: ["wm.Label", {"height":"100%","width":"99px","border":"0","caption":"Sitio Web Oficial","link":"http://www.rochester.edu.co"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}