import org.json.simple.parser.JSONParser;

public class JSONReader {

	public static void main(String[] args) {
		JSONParser parser = new JSONParser();
		try {
			Object obj = parser.parse(new FileReader(""));
			JSONObject jsonObject = (JSONObject) obj;
			
			String champion = (String) jsonObject.get("champion");
			String tag = (String) jsonObject.get("tag");
			int attackdamage = (int) jsonObject.get("attackdamage");
			int adperlvl = (int) jsonObject.get("adperlvl");
			int health = (int) jsonObject.get("health");
			int hpperlvl = (int) jsonObject.get("hpperlevel");
			int hpregen = (int) jsonObject.get("hpregen");
			int hpregenlvl = (int) jsonObject.get("hpregenlvl");
			int attackspeed = (int) jsonObject.get("attackspeed");
			int asperlvl = (int) jsonObject.get("asperlvl");
			int armor = (int) jsonObject.get("armor");
			int armorperlvl = (int) jsonObject.get("armorperlvl");
			int mr = (int) jsonObject.get("mr");
			int mrperlvl = (int) jsonObject.get("mrperlvl");
			int mana = (int) jsonObject.get("mana");
			int manaperlvl = (int) jsonObject.get("manaperlvl");
			
			
			JSONArray companyList = (JSONArray) jsonObject.get();
		}
        catch (Exception ex) {
        }
	}

}
