var e = document.getElementById("preset");
const points = document.getElementById("points");
const rules_list = document.getElementById("rules");
const settings_rules = document.getElementById("settings_rules")
point_value = Number(points.innerHTML)
var rules = ''


//renders the rules for the home page
function renderRules (div) {
    let html = '';
    rules.forEach(function(item) {
      const markup = `
      <div class="rule">
                  <div class="rule_div rule_width">
                      <h1 class="rule_txt">
                          ${item.title}
                      </h1>
                  </div>
                 
                  <div class="vl"></div>
                 
                  <div class="points_txt_div rule_width">
                      <h1 class="points_rule_txt">
                          ${item.points}
                      </h1>
                  </div>
                  
                  <div class="vl"></div>
                 
                  <div class="control_div rule_width">
                      <div class="rule_control">
                          <div class="add control_holder">
                              <button  onclick="addPoints(${item.points})" class="control_button" id="add">
                                  <i class="material-icons point_button">add</i>
                              </button>
                          </div>
                          <div class="vl"></div>
                          <div class="subtract control_holder">
                              <button onclick="minusPoints(${item.points})" class="control_button" id="subtract">
                                  <i class="material-icons point_button">remove</i>
                              </button>
                          </div>

                      </div>
                  </div>
              </div>
      `;
  html += markup
});
div.innerHTML = html;       
        
     
};


//renders the rules on the settings page
function renderRulesSettings (div) {
    let html = '';
    rules.forEach(function(item) {
      const markup = `
      <div class="rule">
                  <div class="rule_div rule_width">
                      <h1 class="rule_txt">
                          ${item.title}
                      </h1>
                  </div>
                 
                  <div class="vl"></div>
                 
                  <div class="points_txt_div rule_width">
                      <h1 class="points_rule_txt" id =${rules.indexOf(item)}>  
                          ${item.points}
                      </h1>
                  </div>
                  
                  <div class="vl"></div>
                 
                  <div class="control_div rule_width">
                      <div class="rule_control">
                          <div class="add control_holder">
                              <button  onclick="addPointsSettings(1,${rules.indexOf(item)})" class="control_button" id="add">
                                  <i class="material-icons point_button">add</i>
                              </button>
                          </div>
                          <div class="vl"></div>
                          <div class="subtract control_holder">
                              <button onclick="minusPointsSettings(1, ${rules.indexOf(item)})" class="control_button" id="subtract">
                                  <i class="material-icons point_button">remove</i>
                              </button>
                          </div>

                      </div>
                  </div>
              </div>
      `;
  html += markup
  
});
div.innerHTML = html;       
        
     
};

function logValue () {
  var e = document.getElementById("preset");
  var str_preset = e.options[e.selectedIndex].text;

  
  var docRef = db.collection("Presets").doc(str_preset);
  var name = 'preset' + "=";
  

  docRef.get().then((doc) => {
      if (doc.exists) {
          rules = doc.data();
          rules = rules.rules
          console.log(rules)
          renderRules(rules_list);
          renderRulesSettings(settings_rules);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}

e.addEventListener('change', logValue);


function addPoints (value) {
    point_value = point_value + value
    points.innerHTML = point_value

}

function minusPoints (value) {
    point_value = point_value - value
    points.innerHTML = point_value
}

function addPointsSettings (value, rule) {
    var rule_content = document.getElementById(rule);
    rule_value = Number(rule_content.innerHTML);
    rule_value = rule_value + value;
    rule_content.innerHTML = rule_value;
    rules[rule].points = rule_value
}

function minusPointsSettings (value, rule) {
    var rule_content = document.getElementById(rule);
    rule_value = Number(rule_content.innerHTML);
    rule_value = rule_value - value;
    rule_content.innerHTML = rule_value;
    rules[rule].points = rule_value
}


document.addEventListener('DOMContentLoaded', function () {
    logValue()

});


var settings_panel = document.getElementById("settings_panel");
var settings_body = document.getElementById("settings_body")

function openNav() {
     settings_panel.style.width = "100vw";
     settings_body.style.display = "block";
     settings_body.style.opacity = "100";
     
  }
  
function closeNav() {
    document.getElementById("settings_panel").style.width = "0";
    settings_body.style.display = "none";
    renderRules(rules_list);
} 