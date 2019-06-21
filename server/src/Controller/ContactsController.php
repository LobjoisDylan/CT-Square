<?php

namespace App\Controller;

use App\Entity\Contacts;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request; 
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;


class ContactsController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
    */
    public function createContacts(Request $request) {
    
        $contacts = new Contacts();
        $contacts->setNom('Joaquim');
        $contacts->setPrenom('Gameiro');
        $contacts->setTelephone('0787770012');
        $contacts->setEmail('joaquim.gameiro@epitech.eu');
        $contacts->SetNote('Le meilleur');
        
        $em = $this->getDoctrine()->getManager();
        $em->persist($contacts);
        $em->flush();

        return new Response('article crée avec id' .$contacts->getId());
    }

    /**
     * @Route("/contacts", name="contacts")
    */
    public function getAllUsers() {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Contacts::class);
        $contacts = $repo->findAll();

        $jsonContent = $serializer->serialize($contacts, 'json');

        return new Response($jsonContent);
    }

    /**
     * @Route("/affichage/{id}", name="affichage")
    */
    public function getOneUsers($id) {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Contacts::class);
        $contacts = $repo->find($id);

        $jsonContent = $serializer->serialize($contacts, 'json');

        return new Response($jsonContent);
    }
}
