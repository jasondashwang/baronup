import math
import random

offenseChampionStats = {'attackDamage': 100, 'baseAttackSpeed': 0.625, 'bonusAttackSpeed': 160, 'criticalChance': 0, 'criticalDamage': 200, 'flatArmorPenetration': 50, 'percentArmorPenetration': 0, 'healthPer5': 0, 'health': 2000, 'mana': 1000, 'manaPer5': 0, 'abilityPower': 100, 'flatMagicPenetration': 50, 'percentMagicPenetration': 0, 'lifesteal': 0, 'spellvamp': 0, 'armor': 50, 'magicResist': 0, 'range': 125, 'movement': 0}
offenseMasteries = {'doubleEdged': 0, 'frenzy': 1, 'arcaneBlade': 0, 'havoc': 0, 'unyielding': 0, 'juggernaut': 0, 'reinforcedArmor': 0, 'secondWind': 0, 'adaptiveArmor': 0, 'fury': 0, 'sorcery': 0, 'bruteForce': 0, 'mentalForce': 0, 'martialMastery': 0, 'arcaneMastery': 0, 'executioner': 0, 'warlord': 0, 'archmage': 0, 'devastatingStrikes': 0, 'veteranScars': 0, 'recovery': 0, 'block': 0, 'hardiness': 0, 'resistance': 0, 'legendaryGuardian': 0, 'perserverance': 0, 'fleetOfFoot': 0, 'expandedMind': 0, 'summonerInsight': 0, 'vampirism': 0, 'strengthOfSpirit': 0, 'Meditation': 0, 'intelligence': 0}

defenseChampionStats = {'attackDamage': 100, 'baseAttackSpeed': 0, 'bonusAttackSpeed': 0, 'criticalChance': 10, 'criticalDamage': 200, 'flatArmorPenetration': 0, 'percentArmorPenetration': 0, 'healthPer5': 0, 'health': 3000, 'mana': 1000, 'manaPer5': 0, 'abilityPower': 0, 'flatMagicPenetration': 0, 'percentMagicPenetration': 0, 'lifesteal': 0, 'spellvamp': 0, 'armor': 50, 'magicResist': 50, 'range': 425, 'movement': 0}
defenseMasteries = {'doubleEdged': 0, 'frenzy': 0, 'arcaneBlade': 0, 'havoc': 0, 'unyielding': 1, 'juggernaut': 0, 'reinforcedArmor': 0, 'secondWind': 0, 'adaptiveArmor': 0, 'fury': 0, 'sorcery': 0, 'bruteForce': 0, 'mentalForce': 0, 'martialMastery': 0, 'arcaneMastery': 0, 'executioner': 0, 'warlord': 0, 'archmage': 0, 'devastatingStrikes': 0, 'veteranScars': 0, 'recovery': 0, 'block': 0, 'hardiness': 0, 'resistance': 0, 'legendaryGuardian': 0, 'perserverance': 0, 'fleetOfFoot': 0, 'expandedMind': 0, 'summonerInsight': 0, 'vampirism': 0, 'strengthOfSpirit': 0, 'Meditation': 0, 'intelligence': 0}


def calculate():	

	# Offense Stats
	offAttackDamage = offenseChampionStats['attackDamage']
	offCriticalChance = offenseChampionStats['criticalChance']
	offCriticalDamage = offenseChampionStats['criticalDamage']
	offFlatArmorPen = offenseChampionStats['flatArmorPenetration']
	offPerArmorPen = offenseChampionStats['percentArmorPenetration']
	offFlatMagicPen = offenseChampionStats['flatMagicPenetration']
	offPerMagicPen = offenseChampionStats['percentMagicPenetration']
	offArmor = offenseChampionStats['armor']
	offMagicResist = offenseChampionStats['magicResist']
	offAbilityPower = offenseChampionStats['abilityPower']
	offHealthPer5 = offenseChampionStats['healthPer5']
	offManaPer5 = offenseChampionStats['manaPer5']
	offLifesteal = offenseChampionStats['lifesteal']
	offSpellvamp = offenseChampionStats['spellvamp']
	offHealth = offenseChampionStats['health']
	offMana = offenseChampionStats['mana']
	offRange = offenseChampionStats['range']
	offBaseAS = offenseChampionStats['baseAttackSpeed']
	offBonusAS = offenseChampionStats['bonusAttackSpeed']
	offAttackSpeed = offBaseAS * (offBonusAS / 100)

	# Defense Stats
	defAttackDamage = defenseChampionStats['attackDamage']
	defCriticalChance = defenseChampionStats['criticalChance']
	defCriticalDamage = defenseChampionStats['criticalDamage']
	defFlatArmorPen = defenseChampionStats['flatArmorPenetration']
	defPerArmorPen = defenseChampionStats['percentArmorPenetration']
	defFlatMagicPen = defenseChampionStats['flatMagicPenetration']
	defPerMagicPen = defenseChampionStats['percentMagicPenetration']
	defArmor = defenseChampionStats['armor']
	defMagicResist = defenseChampionStats['magicResist']
	defAbilityPower = defenseChampionStats['abilityPower']
	defHealthPer5 = defenseChampionStats['healthPer5']
	defManaPer5 = defenseChampionStats['manaPer5']
	defLifesteal = defenseChampionStats['lifesteal']
	defSpellvamp = defenseChampionStats['spellvamp']
	defHealth = defenseChampionStats['health']
	defMana = defenseChampionStats['mana']
	defRange = defenseChampionStats['range']
	defBaseAS = defenseChampionStats['baseAttackSpeed']
	defBonusAS = defenseChampionStats['bonusAttackSpeed']
	defAttackSpeed = defBaseAS * (defBonusAS / 100)

	#Offensive Masteries
	if offenseMasteries['doubleEdged'] == 1:
		if offRange >= 400:
			offDoubleEdgedInflict = .015
			offDoubleEdgedReceive = .015
		else:
			offDoubleEdgedInflict = .02
			offDoubleEdgedReceive = .01
	else:
		offDoubleEdgedInflict = 0
		offDoubleEdgedReceive = 0
	if offenseMasteries['frenzy'] == 1:
		frenzy = True
	else:
		frenzy = False
	if offenseMasteries['havoc'] == 1:
		havocInflict = .03
	else:
		havocInflict = 0
	if offenseMasteries['arcaneBlade'] == 1:
		arcaneBladeHit = .05 * offAbilityPower
	else:
		arcaneBladeHit = 0
	if offenseMasteries['juggernaut'] == 1:
		offHealth == offHealth * 1.03

	#Defensive Masteries
	if defenseMasteries['doubleEdged'] == 1:
		if defRange >= 400:
			defDoubleEdgedInflict = .015
			defDoubleEdgedReceive = .015
		else:
			defDoubleEdgedInflict = .02
			defDoubleEdgedReceive = .01
	else:
		defDoubleEdgedInflict = 0
		defDoubleEdgedReceive = 0
	if defenseMasteries['unyielding'] == 1:
		if defRange >= 400:
			unyield = 1
		else:
			unyield = 2
	else:
		unyield = 0
	if defenseMasteries['veteranScars'] > 0:
		defHealth =
	if defenseMasteries['juggernaut'] == 1:
		defHealth = defHealth * 1.03


	# Multiplers and On Hits
	offMultiplier = offDoubleEdgedInflict + havocInflict + defDoubleEdgedReceive
	abilityPowerHit = arcaneBladeHit

	# Armor Damage Reduction
	if offFlatArmorPen <= 0 and offPerArmorPen <= 0:
		damageReduction = 100 / (100 + defArmor)
	elif offFlatArmorPen <= 0 and offPerArmorPen > 0:
		damageReduction = 100 / (100 + ((1 - (offPerArmorPen /100)) * defArmor))
	elif offPerArmorPen <= 0 and offFlatArmorPen > 0:
		damageReduction = 100 / (100 + (defArmor - offFlatArmorPen))
	else:
		damageReduction = 100 / (100 + ((1 - (offPerArmorPen /100)) * (defArmor - offFlatArmorPen)))

	# Magic Resist Reduction

	if offFlatMagicPen <= 0 and offPerArmorPen <= 0:
		magicDamageReduction = 100 / (100 + defMagicResist)
	elif offFlatMagicPen <= 0 and offPerMagicPen > 0:
		magicDamageReduction = 100 / (100 + ((1 - (offPerMagicPen / 100)) * defMagicResist))
	elif offPerMagicPen <= 0 and offFlatMagicPen > 0:
		magicDamageReduction = 100 / (100 + (defMagicResist - offFlatMagicPen))
	else:
		magicDamageReduction = 100 / (100 + ((1 - (offPerMagicPen / 100)) * (defMagicResist - offFlatMagicPen)))

	# Critical Sampler
	hitSamples = []
	damageSamples = []
	sampleSize = 100

	for a in range(sampleSize):
		hits = 0
		totalDamage = 0
		targetHealth = defHealth
		attackSpeeds = []
		if frenzy:
			frenzystacks = 0
			dynamicAttackSpeed = offAttackSpeed
			while targetHealth > 0:
				damageDone = 0
				if random.random() <= (offCriticalChance / 100):
					damageDone = ((((offAttackDamage * (offCriticalDamage / 100)) * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction))	- unyield						
					frenzystacks += 1
					dynamicAttackSpeed = offBaseAS * ((offBonusAS / 100) + (.05 * frenzystacks))
					targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * dynamicAttackSpeed))
					timeHits = math.floor(3 * dynamicAttackSpeed)
					while timeHits > 0 and targetHealth > 0:
						if frenzystacks == 3:
							if random.random() <= (offCriticalChance / 100):
								damageDone = ((((offAttackDamage * (offCriticalDamage / 100)) * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction))	- unyield						
								dynamicAttackSpeed = offBaseAS * ((offBonusAS / 100) + (.05 * frenzystacks))
								targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * dynamicAttackSpeed)) 
								timeHits = math.floor(3 * dynamicAttackSpeed)	
							else:
								damageDone = ((((offAttackDamage * (offCriticalDamage / 100)) * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction))	- unyield						
								targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * dynamicAttackSpeed))	
								timeHits -= 1	
						else:
							if random.random() <= (offCriticalChance / 100):
								damageDone = ((((offAttackDamage * (offCriticalDamage / 100)) * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction)) - unyield		
								frenzystacks += 1
								dynamicAttackSpeed = offBaseAS * ((offBonusAS / 100) + (.05 * frenzystacks))
								targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * dynamicAttackSpeed))
								timeHits = math.floor(3 * dynamicAttackSpeed)	
							else:
								damageDone = (((offAttackDamage * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction)) - unyield
								targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * dynamicAttackSpeed))	
								timeHits -= 1	
						hits += 1
						totalDamage += damageDone
						attackSpeeds.append(dynamicAttackSpeed)
						
					if timeHits == 0:
						frenzystacks = 0
						dynamicAttackSpeed = offAttackSpeed
						attackSpeeds.append(dynamicAttackSpeed)

				else:
					damageDone = (((offAttackDamage * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction)) - unyield			
					targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * offAttackSpeed))
					hits += 1
				totalDamage += damageDone
				attackSpeeds.append(dynamicAttackSpeed)



		else:
			while targetHealth > 0:
				damageDone = 0
				if random.random() <= (offCriticalChance / 100):
					damageDone = ((((offAttackDamage * (offCriticalDamage / 100)) * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction)) - unyield
					targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * offAttackSpeed))
				else:
					damageDone = (((offAttackDamage * (1 + offMultiplier)) * damageReduction) + ((abilityPowerHit * (1 + offMultiplier)) * magicDamageReduction)) - unyield
					targetHealth = targetHealth - damageDone + (defHealthPer5 / (5 * offAttackSpeed))
				hits += 1
				totalDamage += damageDone
		hitSamples.append(hits)
		damageSamples.append(totalDamage)

	# Average DPS, Hits, Time
	totalHits = 0
	for x in hitSamples:
		totalHits += x
	averageHits = totalHits / sampleSize

	if len(attackSpeeds) > 0:
		totalAttackSpeed = 0
		for y in attackSpeeds:
			totalAttackSpeed += y
		averageAttackSpeed = totalAttackSpeed / len(attackSpeeds)

	else:
		averageAttackSpeed = offAttackSpeed

	averageTime = averageHits / averageAttackSpeed

	finalTotalDamage = 0
	for z in damageSamples:
		finalTotalDamage += z
	averageTotalDamage = finalTotalDamage / sampleSize
	averageDPS = averageTotalDamage / averageTime

	print(averageDPS)
	print(averageTime)
	print(averageHits)


calculate()
			
		
