	function deQuiz(){
	var vraag0 =  prompt('Welkom bij De Quiz! Start deze game door start te typen!')
				if (vraag0 == 'start' ) {var vraag1 = prompt('wat is Elvis Presely s tweede naam? A: Aaron.  B: Armin .')
					if (vraag1 == 'A' ) {var vraag2 = prompt('wie is de zanger van Counting Crows? A: Adam Durits. B: Adam Duritz')
						if (vraag2 == 'B') {var vraag3 = prompt('welke beroemde groep was ook bekend als The Quarrymen? A: De Beatles B: Rolling Stones')
							if (vraag3 == 'A') {var vraag4 = prompt('wat is de hele naam van Madonna? A: Madonna Ciccone. B: Madonna Louise Ciccone.')
								if (vraag4 == 'B') {var vraag5 = prompt('wie is de drummer van metalica? A: Lars Ulrich. B: Daron Logan')
									if (vraag5 == 'A') {var vraag6 = prompt('wie won de meeste Grammy Awards in de jaren 80? A: Michael Jackson. B: Billy Joel')
										if (vraag6 == 'A') {var vraag7 = prompt('hoe veel snaaren heeft een mandoline. A: 6. B: 8.')	
	
											if (vraag7 == 'B') {var vraag8 = prompt('welke zanger is uitgeroepen tot stem van europa na drie keer de eurovision song festival te winnen? A: Johny Logan. B: Johnny Logan.')
												if (vraag8 == 'B') {var vraag9 = prompt('wie heeft de muziek voor de spagetti western gocomponeerd voor The good The bad and The ugly? A: Ennio Morricone. B: Milton Babbit')
													if (vraag9 == 'A') {var vraag10 = prompt('Heel goed gedaan je hebt De Quiz verslagen. Type: "Finish" om De Quiz af te ronden.')
														if (vraag10 = 'Finish') {alert("Jij weet veel van muziek zech.")

														}
														} else {alert("Game over!");
																			
														}
													} else {alert("Game over!");	

													}
												} else {alert("Game over!");										
												}
											} else {alert("Game over!.");
										}
										} else {alert("Game over!");
									}
									} else {alert("Game over!");
								}
								} else {alert("Game over!.");
							}
							} else {alert("Game over!.");
						}
						} else {alert("Game over!");
					}
	 				} else {alert("Game over!");
	 				
	 			}
}

