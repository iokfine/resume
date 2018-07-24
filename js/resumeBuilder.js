var bio = {
	"name": "Nicolas(黄金星)",
	"role": "JAVA Developer",
	"contacts": {
		"email": "nicolas211@163.com",
		"github": "nicolas211",
		"qq": "823977362",
		"location": "广东-深圳"
	},
	"picture": "images/me.JPG",
	"welcomeMessage": "我是一个有代码强迫症的患者,代码风格很严格~别让我看到了难看的代码,我会帮你全部改掉的,哈哈"+
			  "其实编程很简单,只要想学什么都很容易的,主要要不断学习,只有学习才不会被淘汰,对新事物一定要尝新!",
	"skills": ["mysql", "Java", "linux", "Software Development", "webApp Development"]
};

var work = {
	"jobs": [
		{
			"employer": "javaWeb Developer",
			"title": "& AppOps",
			"location": "广东, 深圳, 南山",
			"datesWorked": "2017.9- 现在",
			"description": "公司内部为亚马逊品牌产品开发,需要对大量的物料和产品进行统一管理(发布,同步,添加,批量更新)商城数据"+
				",类似于 速卖通 等 erp系统,主要责任：跨境电商物料系统商城系统开发对接亚马逊商城"+
				"负责：开发组长。项目开发。项目管理。系统运维，服务优化，以及项目架构"
				
				
		},
		{
			"employer": "Amazon Crawler",
			"title": "AppOps",
			"location": "广东, 深圳, 南山",
			"datesWorked": "2017.8- 现在",
			"description": "根据业务需要,爬取Amazon产品相关信息...这里不做具体介绍. 反正就是各种爬各种"
		}
	]
};

var education = {
	"schools": [
		{ "name": "宜春学院",
			"datesAttended": "2014 - 2018",
			"location": "江西, 宜春, 袁州区",
			"degree": "本科",
			"major": "计算机科学",
			"minor": "Germanic Studies",
			"url": "www.uwindsor.ca"
		}		
	],
	"onlineCourses": [
		{ "school": "慕课网",
			"title": "Java相关知识",
			"completed": "November 2016",
			"url": "https://www.imooc.com/"
		},
		{ "school": "CSDN",
			"title": "Vue全家桶使用",
			"completed": "November 2017",
			"url": "https://www.csdn.net/"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Amazon crawler",
			"datesWorked": "2017.9 - 2018.1",
			"description": "各种爬虫.....无法举例 " +
			"Nanodegree.",
			//"images": ["images/frogger.jpg"],
			//"url": ""
		},
		{
			"title": "虎空商城前台",
			"datesWorked": "2018.1",
			"description": "跨境电商卖家商品介绍平台,类似亚马逊的产品和产品详细界面的产品介绍" +
			"Nanodegree.",
			//"images": ["images/portfolio.jpg"],
			//"url": "http://www.cherylcourt.ca/"
		},
		{
			"title": "Confluence",
			"datesWorked": "2017.9 - 2017.10",
			"description": "搭建内网WIKI系统,方便内部人员工作的安排,和文件的共享",
			//"images": ["images/web.jpg"],
			//"url": "http://helpful-kit-572.appspot.com/"
		},
		{
			"title": "个人知识库(刚创建)",
			"datesWorked": "2018.7 - 现在",
			"description": "仿照ethfans.net,建立个人的知识库,添加了问答模块,仿造StackOverFlow的问答模块,结合开发",
			"images": ["images/web.jpg"],
			"url": "http://iokfine.com/main"
		}
	]
};
var intr = '<span class="welcome-message">%data%</span>';

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = intr.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.qq));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			//var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			//$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();
